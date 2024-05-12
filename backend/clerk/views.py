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

class Reqview(APIView):
      def get(self, request):
        req = Requests.objects.all()
        serializer = Requestserializer(req, many=True)
        return Response(serializer.data)
      
class ReqDetail(APIView):
    def get (self, request, pk):
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


    return Response({"sef":"img"})
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
def notfoundresp(request):


    return Response({"Fdfs":"sfsdf"}, status=200)


@api_view(['POST'])
def foundresp(request):


    return Response({"Fdfs":"sfsdf"}, status=200)
    
