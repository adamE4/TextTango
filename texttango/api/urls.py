from django.urls import path, include
from .views import MessageView

urlpatterns = [
    path('admin',MessageView.as_view()),

]