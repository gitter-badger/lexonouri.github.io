from django.shortcuts import render
from django.http import HttpResponse

from .models import Greeting

# Create your views here.
def index(request):
    return render('../index.html')


def db(request):
    return render('../index.html', 'db.html')

