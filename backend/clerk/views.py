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
    
    img = './dej1.jpg'
    img2= './q.jpg'
    match_found = False
    criminal = Criminal.objects.all()
    for cr in criminal:

        if check_img(img,img2):
           match_found = True
           possible_match = cr
           break
    if match_found:
        print("possible match found")
        return Response({"sdfds":"fsdfsdf"})
    else:
        print("no match found")
        return Response({"sdfds":"fsdfsdf"})


    return Response({"sef":"img"})
@api_view(['POST'])
def searchssn(request):

    return Response({"sef":"ssn"})
@api_view(['POST'])
def searchname(request):

    return Response({"sef":"name"})
