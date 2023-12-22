# Forms

Forms can be implemented using the [Webform module](https://www.drupal.org/project/webform), so that you can render webforms into custom elements.

**Note:** Development is currently ongoing, view open issue at [#3336148](https://www.drupal.org/project/lupus_decoupled/issues/3336148).

## Use webforms

Webforms are created in the Drupal UI using the form builder.

Create a new form:

**Administration** > **Webforms** > **Add webform**

Here you can add fields to the form, and configure the form settings.

## Render forms

Forms are rendered by Drupal-CE into custom elements, which can be used in your frontend.

Example of a form rendered into a custom element:

```json
"element": "webform",
"title": "Contact",
"webformCE": [
  {
    "element": "webform-ce",
    "content": "<form>...</form"
  }
]
```