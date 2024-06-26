from rest_framework.views import APIView # type: ignore
from rest_framework.response import Response # type: ignore
from accounts.models import CustomUser
from accounts.serializers import accountSerializer
from rest_framework.decorators import api_view # type: ignore
from rest_framework.authtoken.models import Token # type: ignore
from accounts.email import sendMail
from accounts.email import passwordGenerator
from rest_framework.decorators import authentication_classes,permission_classes # type: ignore
from rest_framework.authentication import SessionAuthentication,TokenAuthentication # type: ignore
from rest_framework.permissions import IsAuthenticated # type: ignore
from django.shortcuts import get_object_or_404
from django.db.models import Q

@api_view(['GET'])     
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
def AccountView( request):
    accounts = CustomUser.objects.filter(
    Q(branch=request.user.branch) & ~Q(role="local")
     ).order_by('-id')
    serializer = accountSerializer(accounts, many=True)
    return Response(serializer.data)
      
class AccountDetail(APIView):
    def get(self , request, pk):
        account = get_object_or_404(CustomUser, pk=pk)
        serializer = accountSerializer(instance=account)
        return Response(serializer.data)
    def patch(self, request ,pk):
        account = get_object_or_404(CustomUser, pk=pk)
        serializer = accountSerializer(account , data=request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": "account updated sucessfully"})
        return Response({"success":"Seems like there is an error in the input you entered, please check your input and try again"}, status=400)
    def delete(self,request,pk):
        #account = get_object_or_404(CustomUser, pk=pk)
        try:
            account = CustomUser.objects.get(pk=pk)
        except CustomUser.DoesNotExist:
             return Response({'success': 'account not found'}, status=404)
        if account.is_active:
           account.is_active= False
           account.save()
           return Response({'success': 'account deactivated successfully'}, status=200)
        else:
            return Response({'success': 'account already deactivated'}, status=400)



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
        print(user.email,password)
        token = Token.objects.create(user=user)
        user.save()
        return Response({"success":"local account has been created successfully","token": token.key, "user" :serializer.data} ,status=201)
    else:
        return Response(serializer.errors, status=400)




   
    



    

    
