from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser
from .serializers import accountSerializer
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404



@api_view(['POST'])
def login(request):
    user = get_object_or_404(CustomUser, email=request.data['email'])
    if not user.check_password(request.data['password']):
        return Response({"detai":"Not found." }, status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user =user)
    serializer  = accountSerializer(instance=user)
    return Response({"token": token.key, "user" :serializer.data })




   
    



    

    
