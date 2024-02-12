from rest_framework import serializers
from .models import WantedCriminal

class WantedSerializer(serializers.ModelSerializer):
    class Meta:
        model = WantedCriminal
        fields = '__all__'