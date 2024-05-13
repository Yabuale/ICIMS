from rest_framework.views import APIView # type: ignore
from rest_framework.response import Response # type: ignore
from accounts.models import Branch
from accounts.models import CustomUser
from accounts.serializers import branchSerializer,accountSerializer,branchNameSerializer
from rest_framework.decorators import api_view # type: ignore
from rest_framework.authtoken.models import Token # type: ignore
from accounts.email import sendMail
from accounts.email import passwordGenerator
from django.shortcuts import get_object_or_404
from rest_framework.decorators import authentication_classes,permission_classes
from rest_framework.authentication import SessionAuthentication,TokenAuthentication
from rest_framework.permissions import IsAuthenticated

@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
class branchView(APIView):
      def get(self, request):
        branch = Branch.objects.all()
        serializer = branchSerializer(branch, many=True)
        return Response(serializer.data)


class branchNameView(APIView):

      def get(self, request):
        branch = Branch.objects.all()
        serializer = branchNameSerializer(branch, many=True)
        return Response(serializer.data)


@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
class branchDetail(APIView):
    def get(self,request,pk):
        branch =get_object_or_404(Branch, pk=pk)
        serializer = branchSerializer(instance=branch)
        return Response(serializer.data,status=200)
    def patch(self,request,pk):
        branch = get_object_or_404(Branch, pk=pk)
        serializer = branchSerializer(branch , data=request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": "brach updated successfully" , "updated":serializer.data},status=200)
        return Response(serializer.errors, status=400)
    def delete(self,request,pk):
        branch = get_object_or_404(Branch, pk=pk)
        branch.delete()
        return Response({"success":"deleted successfully"},status=200)
        

      
class localAccountView(APIView):
      def get(self, request):
        accounts = CustomUser.objects.filter(role="local").order_by('-id') 
        serializer = accountSerializer(accounts, many=True)
        return Response(serializer.data)

class localAccountDetail(APIView):
    def get(self,request,pk):
        account = get_object_or_404(CustomUser, pk=pk)
        serializer = accountSerializer(instance=account)
        return Response(serializer.data)
    
    def patch(self,request,pk):
        account = get_object_or_404(CustomUser, pk=pk)
        serializer = accountSerializer(account , data=request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg": "success" , "updated":serializer.data})
        return Response(serializer.errors, status=400)
    def delete(self,request,pk):
        #account = get_object_or_404(CustomUser, pk=pk)
        try:
            account = CustomUser.objects.get(pk=pk)
        except CustomUser.DoesNotExist:
             return Response({'success': 'account not found'}, status=404)
        if account.is_active: 
           account.is_active= False
           account.save()
           print(account.is_active)
           return Response({'success': 'account deactivated successfully'}, status=200)
        else:
            return Response({'success': 'account already deactivated'}, status=400)


@api_view(['POST'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
def addBranch(request):
    serializer = branchSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": "Branch record added"}, status=201 )
    else:
        return Response(serializer.errors, status=400)

@api_view(['POST'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
def addAccount(request):
    serializer = accountSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = CustomUser.objects.get(email=request.data['email'])
        #generate strong password
        password = passwordGenerator()
        user.set_password(password)
        #send password to users email
        sendMail(password, user.first_name, user.email)
        token = Token.objects.create(user=user) 
        user.save()
        return Response({"success":"You have sucessfully created local account"}, status=201 )
    else:
        return Response(serializer.errors, status=400)

@api_view(['GET'])
def braches(request): 
    branch = Branch.objects.all()
    serialize = branchSerializer(branch, many=True)
    return Response(serialize.data,status=200)

    




   
    



    

    
