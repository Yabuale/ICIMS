from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from criminal.serializers import Criminalserializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from criminal.serializers import Requestserializer
from criminal.serializers import Responceserializer
from criminal.models import Requests
from criminal.models import Responces
from criminal.models import Criminal
from .img import check_img
import os
import tempfile

from rest_framework.decorators import authentication_classes,permission_classes
from rest_framework.authentication import SessionAuthentication,TokenAuthentication
from rest_framework.permissions import IsAuthenticated




@api_view(['GET']) 
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated]) 
def Reqview( request):
    req = latest_requests = Requests.objects.filter(to_acc=request.user).order_by('-id')
    serializer = Requestserializer(req, many=True)
    return Response(serializer.data)


@api_view(['GET']) 
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])     
def ReqDetail (request, pk):
    print(request.user)
    criminal = get_object_or_404(Requests, pk=pk)
    serializer = Requestserializer(instance=criminal)
    return Response(serializer.data)

@api_view(['POST'])
def searchimg(request):
    img = request.data['img']
    
    img = '.'+img
    
    match_found = False
    criminal = Criminal.objects.all()
    distance = 0.68
    for cr in criminal:
        img2='./'+cr.photo.url
        a = check_img(img,img2)
        if a <= distance:
           distance=a
           match_found = True
           possible_match = cr.id
           break
    if match_found:
        print(distance)
        print(possible_match)
        criminal = get_object_or_404(criminal,pk=possible_match)
        serializer = Criminalserializer(instance = criminal)
        print("possible match found")
        return Response(serializer.data, status=200)
    else:
        print("no match found")
        return Response({"msg":"no match record of this photo found"}, status=404)


   
@api_view(['POST'])
def searchdimg(request):
  img = request.data['img']
  with tempfile.NamedTemporaryFile(delete=False) as temp_file:
    for chunk in img.chunks():
        temp_file.write(chunk)
    temp_file_path = temp_file.name
    match_found = False
    criminal = Criminal.objects.all()
    distance = 0.68
    for cr in criminal:
        img2='./'+cr.photo.url
        a = check_img(temp_file_path,img2)
        if a <= distance:
           distance=a
           match_found = True
           possible_match = cr.id
           break
    if match_found:
        print(distance)
        print(possible_match)
        criminal = get_object_or_404(criminal,pk=possible_match)
        serializer = Criminalserializer(instance = criminal)
        print("possible match found")
        return Response(serializer.data, status=200)
    else:
        print("no match found")
        return Response({"msg":"no match record of this photo found"}, status=404)
    
  


@api_view(['POST'])
def searchssn(request):
    try:
        ssn = request.data['ssn']
    except KeyError:
        return Response({'error': 'Missing SSN field in request data'}, status=400)

    try:
        criminal = Criminal.objects.get(SSN=ssn)
    except Criminal.DoesNotExist:
        return Response({'error': 'Criminal record not found'}, status=404)

    serializer = Criminalserializer(instance=criminal)
    return Response(serializer.data, status=200)


@api_view(['POST'])
def searchname(request):
    try:
        name = request.data['name']
        fname = request.data['fname']
        lname = request.data['lname']

    except KeyError:
        return Response({'error': 'Missing = field in request data'}, status=400)
    try:
        criminal = Criminal.objects.get(first_name=name,middle_name=fname, last_name=lname,)
    except Criminal.DoesNotExist:
        return Response({'error': 'Criminal record not found'}, status=404)

    serializer = Criminalserializer(instance=criminal)
    return Response(serializer.data, status=200)

@api_view(['POST'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated]) 
def notfoundresp(request):
    id = request.data['id']
    req = get_object_or_404(Requests, pk=id)
    resp = Responces(
        from_acc = request.user,
        to_acc= req.from_acc,
        url="none",
        message="there was no record in the database to your rquest",
        match_found=False
    )
    resp.save()
    return Response({"Fdfs":"sfsdf"}, status=200)




@api_view(['POST'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated]) 
def foundresp(request):
    id = request.data['id']
    url = request.data['url']
    req = get_object_or_404(Requests, pk=id)
    resp = Responces(
        from_acc = request.user,
        to_acc= req.from_acc,
        message="there was a record in the database to your rquest",
        url=url,
        match_found=True
    )
    resp.save()
    return Response({"Fdfs":"sfsdf"}, status=200)
    
