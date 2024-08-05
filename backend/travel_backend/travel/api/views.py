
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from travel.models import Hotel
from .serializers import HotelSerializer,BookingSerializer,UserSerializer
from django.db.models import Q
from travel.models import User
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate, login
import jwt, datetime

# @api_view(['GET'])
# def getHotels(request):
#     hotels = Hotel.objects.all()  # Querying all Hotel objects from the database
#     serializer = HotelSerializer(hotels, many=True)  # Serializing the queryset
#     return Response(serializer.data)  # Returning the serialized data in a Response


@api_view(['GET'])
def getHotels(request):
    hotels = Hotel.objects.all()
    serializer = HotelSerializer(hotels, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def getHotel(request, pk):
    hotel = Hotel.objects.get(id=pk)
    serializer = HotelSerializer(hotel, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users,many=True)
    return Response(serializer.data)


@api_view(['POST'])
def book(request):
    if request.method == 'POST':
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')

        try:
            user = User.objects.get(username=username)
            print(user)
            print(user.check_password(password))
        except User.DoesNotExist:
            raise AuthenticationFailed("User not found")
        
        if not user.check_password(password):
            raise AuthenticationFailed("incorrect password")
        
        payload = {
            'id':user.id,
            'exp':datetime.datetime.utcnow() + datetime.timedelta(minutes=60), #howlong will token last
            'iat':datetime.datetime.utcnow(), # when it is created
        }

        token = jwt.encode(payload,'secret',algorithm='HS256')
        response = Response()
        response.set_cookie(key='jwt',value=token,httponly=True,path='/api/')
        response.data={
            'jwt':token
        }
        

        return response
    
@api_view(['GET'])
def user(request):
    token = request.COOKIES.get('jwt')
    print(f"this is token {token}")
    if not token:
        return Response({'msg':'Please login'},status=status.HTTP_401_UNAUTHORIZED)
    try:
        payload = jwt.decode(token,'secret',algorithms=['HS256'])
    except jwt.ExpiredSignatureError:
        return Response({'msg':'Token has expired'},status=status.HTTP_401_UNAUTHORIZED)
    user = User.objects.get(id =payload['id'])
    serializer = UserSerializer(user)
    print(serializer.data)
    return Response(serializer.data) #contains user data

@api_view(['POST'])
def logout(request):
    response = Response()
    response.delete_cookie('jwt')
    response.data={
        'message':'success logout'
    }
    return response





# @api_view(['POST'])   
# def login(request):
#     if request.method == 'POST':
#         username = request.data.get('username')
#         password = request.data.get('password')

#         user = User.objects.get(username=username)

#         if user is None:
#             raise AuthenticationFailed("User not found")
        
#         if not user.check_password(password):
#             raise AuthenticationFailed("Incorrect password")
        
#         return Response(
#             {
#                 "message":"success"
#             }
#         )
        


        
    
        
    
# @api_view(['PATCH'])
# def updateprofile(request):
    
#     if request.method == 'PATCH':
#         profile = get_object_or_404(Profile, user=request.user)
#         serializer = ProfileSerializer(profile,data = request.data,partial=True)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['PATCH'])
# def updateprofile(request):
#     if not request.user.is_authenticated:
#         return Response({'error': 'Authentication required'}, status=status.HTTP_401_UNAUTHORIZED)
    
#     if request.method == 'PATCH':
#         profile, created = Profile.objects.get_or_create(user=request.user)
        
#         serializer = ProfileSerializer(profile, data=request.data, partial=True)
        
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_200_OK)
        
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    


@api_view(['GET'])
def filterhotel(request):
    name = request.GET.get('name')
    city = request.GET.get('city')
    price_per_night = request.GET.get('price_per_night')

    # Initialize an empty Q object
    query = Q()

    # Check and add each parameter to the query if it's provided
    if name:
        query &= Q(name__icontains=name)
    if city:
        query &= Q(city__icontains=city)
    if price_per_night:
        query &= Q(price_per_night__lt=price_per_night)
    
    # Filter the hotels based on the query
    hotels = Hotel.objects.filter(query)
    
    # Serialize the filtered hotels
    serializer = HotelSerializer(hotels, many=True, context={'request': request})
    
    return Response(serializer.data)



