# Actividad Guía No. 5 - CI/CD con GitHub Actions

**Estudiante:** Mateo Becerra Palacios  
**Documento:** 1017924375  
**Asignatura:** Aplicaciones y servicios web  
**Institución:** Institución Universitaria ITM  

## Descripción del Proyecto
Proyecto desarrollado para la implementación de un flujo automatizado de Integración Continua (CI/CD) utilizando GitHub Actions y Node.js.

## Funcionalidades del Módulo Matemático
- `sumar(a, b)`: Suma dos números.
- `restar(a, b)`: Resta dos números.
- `multiplicar(a, b)`: Multiplica dos números.
- `dividir(a, b)`: División segura con validación de división por cero.
- `potencia(base, exponente)`: Cálculo de exponenciación.

## Integración Continua (CI/CD)
El proyecto cuenta con un workflow en `.github/workflows/ci.yml` que:
1. Se activa automáticamente con cada evento de `push` y `pull_request` a la rama `main`.
2. Descarga el código y aprovisiona el entorno Node.js v20 en Ubuntu.
3. Ejecuta la suite de pruebas unitarias (`npm test`).

## Ejecución Local de Pruebas
Para ejecutar las pruebas automatizadas localmente:

```bash
npm test
```
