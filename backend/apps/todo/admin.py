from django.contrib import admin
from .models import Namespace, Task, TaskLabel

# All the models to be registred
models_to_import = [Namespace, Task, TaskLabel]

# Loop over each model to register them.
for model_to_import in models_to_import:
    admin.site.register(model_to_import)
