from rest_framework.views import APIView
from rest_framework.response import Response
from accounts.models import Branch
from accounts.models import CustomUser
from accounts.serializers import branchSerializer,accountSerializer
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from accounts.email import sendMail
from accounts.email import passwordGenerator
from django.shortcuts import get_object_or_404

class branchView(APIView):
      def get(self, request):
        criminals = Branch.objects.all()
        serializer = branchSerializer(criminals, many=True)
        return Response(serializer.data)

class branchDetail(APIView):
    def get(self,request,pk):
        branch =get_object_or_404(Branch, pk=pk)
        serializer = branchSerializer(instance=branch)
        return Response(serializer.data)
    def patch(self,request,pk):
        branch = get_object_or_404(Branch, pk=pk)
        serializer = branchSerializer(branch , data=request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg": "success" , "updated":serializer.data})
        return Response(serializer.errors, status=400)
    def delete(self,request,pk):
        branch = get_object_or_404(Branch, pk=pk)
        branch.delete()
        return Response({"msg":"deleted successfully"})
        

      
class localAccountView(APIView):
      def get(self, request):
        accounts = CustomUser.objects.all()
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


@api_view(['POST'])
def addBranch(request):
    serializer = branchSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": "Branch record added"}, status=201 )
    else:
        return Response(serializer.errors, status=400)

@api_view(['POST'])
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
        return Response({"token": token.key, "user" :serializer.data} )
    else:
        return Response(serializer.errors, status=400)




   
    



    

    
