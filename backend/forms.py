from django import forms
from .models import Teacher
from .models import Research

class EntryCreationForm(forms.ModelForm):

    class Meta:
        model = Research
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['research'].queryset = Research.objects.none()

        if 'research' in self.data:
            self.fields['research'].queryset = Research.objects.all()

        elif self.instance.pk:
            self.fields['research'].queryset = Research.objects.all().filter(pk=self.instance.research.pk)