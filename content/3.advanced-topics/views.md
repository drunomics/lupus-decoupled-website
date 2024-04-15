# Views

You'll need to enable the 'Lupus Decoupled Views' module

      ddev drush en lupus_decoupled_views

1. Create your view as usual in /admin/structure/views/add
2. When the view edit page opens, in ' + Add' select **'Custom Element Page'** instead of 'Page'.
4. In the format section, change the format to **'Custom Elements'** and change from 'Fields' to **'Content'**.
5. Add the path and, optionally, add a menu entry.

The json response will also work with fields, but you'll need to adjust your Vue application to support it.
