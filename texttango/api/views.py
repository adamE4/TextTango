from django.shortcuts import render
from rest_framework import generics
from .serializers import MessageSerializeer
from .models import Message

class MessageView(generics.CreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializeer

 
