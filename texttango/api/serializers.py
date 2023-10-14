from rest_framework import serializers
from .models import Message

class MessageSerializeer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('id','text')
        
        
