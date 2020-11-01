from typing import List
from django.contrib.auth.models import User
from .models import Namespace, TaskLabel, Task
from django.db.models import Model
from rest_framework import routers, serializers, viewsets

BASE_MODEL_FIELDS = ['author', 'namespace', 'creation_date']

# * ----- USERS ----- *
# Serializers define the API representation.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
         model = User
         fields = ['url', 'username', 'email', 'is_staff']

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# * ----- NAMESPACES ----- *
# Serializers define the API representation.
class NamespacesSerializer(serializers.ModelSerializer):
    class Meta:
         model = Namespace
         fields = ['author', 'color', 'title', 'creation_date', 'users_access']

# ViewSets define the view behavior.
class NamespacesViewSet(viewsets.ModelViewSet):
    queryset = Namespace.objects.all()
    serializer_class = NamespacesSerializer

# * ----- TASKS LABELS ----- *
# Serializers define the API representation.
class TaskLabelSerializer(serializers.ModelSerializer):
    class Meta:
         model = TaskLabel
         task_label_fields = ['title', 'color', 'image', 'namespace']
         fields = BASE_MODEL_FIELDS.extend(task_label_fields)

# ViewSets define the view behavior.
class TaskLabelViewSet(viewsets.ModelViewSet):
    queryset = TaskLabel.objects.all()
    serializer_class = TaskLabelSerializer

# Serializers define the API representation.
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
         model = Task
         task_fields = ['title', 'description', 'labels', 'priority', 'assignees', 'state', 'deadline', 'attachment']
         fields = BASE_MODEL_FIELDS.extend(task_fields)

# ViewSets define the view behavior.
class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer