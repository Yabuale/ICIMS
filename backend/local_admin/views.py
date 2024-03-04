from rest_framework.views import APIView
from rest_framework.response import Response
from accounts.models import CustomUser
from accounts.serializers import accountSerializer
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from accounts.email import sendMail
from accounts.email import passwordGenerator


      
class AccountView(APIView):
      def get(self, request):
        accounts = CustomUser.objects.all()
        serializer = accountSerializer(accounts, many=True)
        return Response(serializer.data)


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




   
    



    

    
