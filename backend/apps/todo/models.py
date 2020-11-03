from django.db import models
from django.contrib.auth.models import User


class Namespace(models.Model):
    """
    This model define user's namespaces.
    """
    author = models.ForeignKey(
        to=User,
        on_delete=models.CASCADE,
        # Tell which property of User should be shown and selected.
        # If not there, it will cause issues. The field should has "unique=True".
        to_field="username",
        related_name='Namespace_author'
    )
    color = models.CharField(max_length=200)
    title = models.CharField(max_length=200, unique=True)
    creation_date = models.DateField(auto_now_add=True)
    # Which users have access to it.
    users_access = models.ManyToManyField(to=User)

    def __str__(self):
        return self.title


class BaseModelTodo(models.Model):
    """
    Base model used for all our items.

    Used for: Note, Task,
    """
    author = models.ForeignKey(
        to=User,
        on_delete=models.CASCADE,
        # Tell which property of User should be shown and selected.
        # If not there, it will cause issues. The field should has "unique=True".
        to_field="username",
        related_name="author"
    )

    namespace = models.ForeignKey(
        to=Namespace,
        on_delete=models.CASCADE,
        # Tell which property of User should be shown and selected.
        # If not there, it will cause issues. The field should has "unique=True".
        to_field="title",
        related_name="namespace"
    )
    # Date where it has been created.
    creation_date = models.DateTimeField(auto_now_add=True)


# * ----- todo list ----- *
class TaskLabel(models.Model):
    """
    This model define a label that con be attribute to tasks.
    """
    title = models.CharField(max_length=100)
    color = models.CharField(max_length=6)
    namespace = models.ForeignKey(
        to=Namespace,
        on_delete=models.CASCADE,
        # Tell which property of User should be shown and selected.
        # If not there, it will cause issues. The field should has "unique=True".
        to_field="title",
        related_name="Label_namespace"
    )

    def __str__(self):
        return self.title


class Task(BaseModelTodo):
    """
    This model define to-do's task.
    """
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=10000)
    labels = models.ManyToManyField(to=TaskLabel, blank=True)
    priority = models.CharField(max_length=200, default="normal")
    assignees = models.ManyToManyField(to=User, blank=True)
    state = models.CharField(max_length=100, default="Backlog")
    deadline = models.DateField(blank=True, null=True)
    attachment = models.CharField(max_length=200, blank=True)
    # TODO: Add comment system

    def __str__(self):
        return self.title
