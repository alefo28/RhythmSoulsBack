'use strict';

/**
 * publicacion controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::publicacion.publicacion', ({ strapi }) => ({
  async delete(ctx) {
    const { id } = ctx.params;

    // Encuentra los comentarios relacionados con la publicación
    const comentarios = await strapi.db.query('api::comment.comment').findMany({
      where: { publicacion: id }, // Asegúrate de que 'publicacion' es el campo correcto en el modelo comment
    });

    // Elimina cada comentario relacionado
    await Promise.all(comentarios.map(comentario => 
      strapi.db.query('api::comment.comment').delete({ where: { id: comentario.id } })
    ));

    // Ahora, elimina la publicación
    const entity = await strapi.service('api::publicacion.publicacion').delete(id);

    return entity;
  },
}));
