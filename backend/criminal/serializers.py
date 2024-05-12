from rest_framework import serializers
from .models import Criminal
from .models import Requests
from .models import Responces

class Criminalserializer(serializers.ModelSerializer):
    class Meta:
        model = Criminal
        fields = '__all__'

class Requestserializer(serializers.ModelSerializer):
    class Meta:
        model = Requests
        fields = '__all__'

class Responceserializer(serializers.ModelSerializer):
    class Meta:
        model = Responces
        fields = '__all__'
