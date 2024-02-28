from rest_framework import serializers
from .models import Criminal

class Criminalserializer(serializers.ModelSerializer):
    class Meta:
        model = Criminal
        fields = '__all__'
