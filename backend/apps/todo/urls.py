from django.urls import path, include
from rest_framework import routers
from .serializers import UserViewSet, NamespacesViewSet, TaskLabelViewSet, TaskViewSet
from rest_framework_simplejwt import views as jwt_views

route_list = [
    [r'users', UserViewSet],
    [r'namespaces', NamespacesViewSet],
    [r'tasks', TaskViewSet],
    [r'task-labels', TaskLabelViewSet],
]

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
for route_name, View_set in route_list:
    router.register(route_name, View_set)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
