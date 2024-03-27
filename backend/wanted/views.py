from rest_framework.views import APIView
from rest_framework.response import Response
from .models import WantedCriminal
from .serializers import WantedSerializer
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from criminal.models import Criminal

class WantedCriminalView(APIView):
      def get(self, request):
        criminals = WantedCriminal.objects.all()
        serializer = WantedSerializer(criminals, many=True)
        return Response({"wanted":serializer.data})

class WantedDetail(APIView):
    def get (self, request, pk):
        criminal = get_object_or_404(WantedCriminal, pk=pk)
        serializer = WantedSerializer(instance=criminal)
        return Response(serializer.data)


@api_view(['POST'])
def checkStat(request):
    try:
        ssn = request.data["ssn"]
        print(ssn)
        a = get_object_or_404(Criminal,SSN=ssn)
        if a:
            return Response({"status": "Success"})
        else:
            return Response({"status": "not"})
    except Exception as e:
        return Response({"status": "Error", "message": str(e)})
    

    
