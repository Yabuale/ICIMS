from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser
from .serializers import accountSerializer
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from django.shortcuts import get_object_or_404
from criminal.models import Criminal
from criminal.models import Requests,Responces
from wanted.models import WantedCriminal
from accounts.models import CustomUser

from rest_framework.decorators import authentication_classes,permission_classes
from rest_framework.authentication import SessionAuthentication,TokenAuthentication
from rest_framework.permissions import IsAuthenticated

@api_view(['POST'])
def login(request):
    user = get_object_or_404(CustomUser, email=request.data['email'])
    if not user.check_password(request.data['password']):
        return Response({"detai":"Not found." }, status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user =user)
    serializer  = accountSerializer(instance=user)
    return Response({"token": token.key, "user" :serializer.data })


@api_view(['POST'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated]) 
def reset_password(request):

    user = request.user
    # Validate required fields
    if 'old' not in request.data or 'New' not in request.data:
        return Response({'sucess': 'Both old_password and new_password are required.'}, status=400)
    old_password = request.data['old']
    new_password = request.data['New']

    # Authenticate with the provided old password
    if not user.check_password(old_password):
        return Response({'sucess': 'Incorrect old password.'}, status=400)
    # Password reset logic with proper hashing
    user.set_password(new_password)
    user.save()
    return Response({"sucess":"password changed successfully "},status=200)




@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated]) 
def clerkNum(request):
    cr=Criminal.objects.count()
    req_count = Requests.objects.filter(to_acc=request.user).count()
    resp= Responces.objects.filter(from_acc=request.user).count()
    return Response({"criminals":cr,"requests":req_count,"responces":resp})


@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated]) 
def policenum(request):
    cr=WantedCriminal.objects.filter(posted_by=request.user).count()
    req_count = Requests.objects.filter(from_acc=request.user).count()
    resp= Responces.objects.filter(to_acc=request.user).count()
    return Response({"criminals":cr,"requests":req_count,"responces":resp})  

@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated]) 
def adminnum(request):
    cr=CustomUser.objects.count()
    req_count = CustomUser.objects.filter(is_active=True).count()
    resp= CustomUser.objects.filter(is_active=False).count()
    return Response({"criminals":cr,"requests":req_count,"responces":resp})
    

@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated]) 
def localnum(request):
    cr=CustomUser.objects.filter(branch=request.user.branch).count()
    req_count = CustomUser.objects.filter(branch=request.user.branch, is_active=True).count()
    resp= CustomUser.objects.filter(branch=request.user.branch, is_active=False).count()
    return Response({"criminals":cr,"requests":req_count,"responces":resp}) 

   
    



    

    
