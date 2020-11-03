from django.contrib.auth.models import User
from .models import Namespace, TaskLabel, Task
from rest_framework import serializers, viewsets
# from django.contrib.auth.decorators import login_required
from rest_framework.permissions import IsAuthenticated

BASE_MODEL_FIELDS = ["author", "namespace", "creation_date"]


# * ----- USERS ----- *
# Serializers define the API representation.
class UserSerializer(serializers.ModelSerializer):
    permission_classes = (IsAuthenticated,)
    class Meta:
        model = User
        fields = "__all__"


# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer


# * ----- NAMESPACES ----- *
# Serializers define the API representation.
class NamespacesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Namespace
        fields = ["title", "author", "color", "creation_date", "user_access"]


# ViewSets define the view behavior.
class NamespacesViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Namespace.objects.all()
    serializer_class = NamespacesSerializer


# * ----- TASKS LABELS ----- *
# Serializers define the API representation.
class TaskLabelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskLabel
        fields = "__all__"


# ViewSets define the view behavior.
class TaskLabelViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = TaskLabel.objects.all()
    serializer_class = TaskLabelSerializer


# Serializers define the API representation.
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = "__all__"


# ViewSets define the view behavior.
# @login_required
class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

