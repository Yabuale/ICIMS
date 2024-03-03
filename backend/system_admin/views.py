from rest_framework.views import APIView
from rest_framework.response import Response
from accounts.models import Branch
from accounts.models import CustomUser
from accounts.serializers import branchSerializer,accountSerializer
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from accounts.email import sendMail
from accounts.email import passwordGenerator

class branchView(APIView):
      def get(self, request):
        criminals = Branch.objects.all()
        serializer = branchSerializer(criminals, many=True)
        return Response(serializer.data)
      
class localAccountView(APIView):
      def get(self, request):
        accounts = CustomUser.objects.all()
        serializer = accountSerializer(accounts, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def addBranch(request):
    serializer = branchSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": "Branch record added"} )
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




   
    



    

    
