from django.http import JsonResponse
import math
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def calculate(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            operation = data.get("operation")
            x = data.get("x")
            y = data.get("y", None)  # certaines opérations n’ont besoin que de x

            result = None

            if operation == "add":
                result = x + y
            elif operation == "subtract":
                result = x - y
            elif operation == "multiply":
                result = x * y
            elif operation == "divide":
                if y == 0:
                    return JsonResponse({"error": "Division par zéro"}, status=400)
                result = x / y
            elif operation == "modulo":
                result = x % y
            elif operation == "sin":
                result = math.sin(math.radians(x))
            elif operation == "cos":
                result = math.cos(math.radians(x))
            elif operation == "tan":
                result = math.tan(math.radians(x))
            elif operation == "sqrt":
                result = math.sqrt(x)
            else:
                return JsonResponse({"error": "Opération non supportée"}, status=400)

            return JsonResponse({"result": result})

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Méthode non autorisée"}, status=405)
