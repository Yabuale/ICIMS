from rest_framework.views import APIView
from rest_framework.response import Response
from wanted.models import WantedCriminal
from wanted.serializers import WantedSerializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from criminal.serializers import Requestserializer
from criminal.serializers import Responceserializer
from criminal.models import Requests
from criminal.models import Responces
from rest_framework.decorators import authentication_classes,permission_classes
from rest_framework.authentication import SessionAuthentication,TokenAuthentication
from rest_framework.permissions import IsAuthenticated
import base64
from django.core.exceptions import ValidationError
from django.core.files.base import ContentFile
from rest_framework.response import Response
from rest_framework import status
from accounts.models import CustomUser



@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])  
def WantedCriminalView( request):
    criminals = WantedCriminal.objects.filter(
    posted_by=request.user  # Filter by currently authenticated user
    ).order_by('-id')
    serializer = WantedSerializer(criminals, many=True)
    return Response(serializer.data) 

class WantedDetail(APIView):
    def get (self, request, pk):
        criminal = get_object_or_404(WantedCriminal, pk=pk)
        serializer = WantedSerializer(instance=criminal)
        return Response(serializer.data)
    def patch(self,request,pk):
        criminal = get_object_or_404(WantedCriminal, pk=pk)
        serializer = WantedSerializer(criminal , data=request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": "Wanted criminal updated successfully"})
        return Response({"success":"Seems like there is an error in the input you entered, please check your input and try again"}, status=400)
    def delete(self,request,pk):
        try:
            criminal = WantedCriminal.objects.get(pk=pk)
        except WantedCriminal.DoesNotExist:
             return Response({'success': 'Criminal not found'}, status=404)
    
        criminal.delete()
        return Response({'success': 'Criminal deleted successfully'}, status=200)

    
        


@api_view(['POST'])
def addWanted(request):
    serializer = WantedSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": "Wanted criminal posted successfully"} , status=201)
    else:
        return Response({"msg":"Seems like there is an error in the input you entered, please check your input and try again"}, status=400)


@api_view(['POST'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])      
def Requestss(request):
    """Efficiently handles request data and saves a new request object without a serializer."""

    required_fields = ['name', 'fname', 'lname', 'id_no', 'message']

    # Check for missing required fields
    missing_fields = [field for field in required_fields if field not in request.data]
    if missing_fields:
        return Response({"error": f"Missing required fields: {', '.join(missing_fields)}"}, status=status.HTTP_400_BAD_REQUEST)

    # Extract and validate data (consider using custom validation logic if needed)
    try:
        name = request.data['name']
        fname = request.data['fname']
        lname = request.data['lname']
        id_no = request.data['id_no']
        message = request.data['message']
        photo=request.data['photo']

        

    except (KeyError, ValueError) as e:
        return Response({"error": f"Invalid data: {str(e)}"}, status=status.HTTP_400_BAD_REQUEST)

    # Handle clerk selection logic (adapt based on your requirements)
    to_account = CustomUser.objects.filter(role='clerk', branch=request.user.branch).first()

    # Create and save the request object
    try:
        request_object = Requests(
            from_acc=request.user,
            to_acc=to_account,
            name=name,
            fname=fname,
            lname=lname,
            id_no=id_no,
            message=message,
            photo=photo  # Include photo if applicable
        )
        print(name)
        print(fname)
        print(lname)
        print(id_no)
        print(message)
        print(photo)
        request_object.save()
        return Response({"success": "Your request has been sent"}, status=200)  
    except ValidationError as e:
        return Response({"error": f"Validation error: {str(e)}"}, status=400)

    # Handle potential exceptions (optional)
    except Exception as e:
        print(str(e))
        return Response({"error": f"An error occurred: {str(e)}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
         

@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated]) 
def Respview(request,pk): 
    req = Responces.objects.filter(to_acc=request.user).order_by('-id')
    serializer = Responceserializer(req, many=True)
    return Response(serializer.data, status=200)
@api_view(['DELETE'])
def rsdelete(request,pk):
    req =get_object_or_404(Responces,pk=pk)
    req.delete()
    return Response({"fsdfds":"sdf"},status=200) 