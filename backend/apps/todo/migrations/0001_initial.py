# Generated by Django 2.2 on 2020-11-01 21:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import djongo.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Namespace',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(max_length=200)),
                ('title', models.CharField(max_length=200, unique=True)),
                ('creation_date', models.DateField(auto_now_add=True)),
                ('author', djongo.models.fields.ArrayReferenceField(on_delete=django.db.models.deletion.CASCADE, related_name='Namespace_author', to=settings.AUTH_USER_MODEL)),
                ('users_access', djongo.models.fields.ArrayReferenceField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='TaskLabel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('color', models.CharField(max_length=6)),
                ('image', models.CharField(max_length=150)),
                ('namespace', djongo.models.fields.ArrayReferenceField(on_delete=django.db.models.deletion.CASCADE, related_name='Label_namespace', to='todo.Namespace', to_field='title')),
            ],
        ),
        migrations.CreateModel(
            name='BaseModelTodo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('creation_date', models.DateTimeField(auto_now_add=True)),
                ('author', djongo.models.fields.ArrayReferenceField(on_delete=django.db.models.deletion.CASCADE, related_name='author', to=settings.AUTH_USER_MODEL, to_field='username')),
                ('namespace', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='namespace', to='todo.Namespace', to_field='title')),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('basemodeltodo_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='todo.BaseModelTodo')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=10000)),
                ('priority', models.CharField(max_length=200)),
                ('state', models.CharField(max_length=100)),
                ('deadline', models.DateField()),
                ('attachment', models.CharField(max_length=200)),
                ('assignees', djongo.models.fields.ArrayReferenceField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('labels', djongo.models.fields.ArrayReferenceField(on_delete=django.db.models.deletion.CASCADE, to='todo.TaskLabel')),
            ],
            bases=('todo.basemodeltodo',),
        ),
    ]