/**
 * Takes a JSON object representing a ticket and turns it into well
 * formatted Slack message
 * @param {object} data - JSON representation of the ticket - The title of the book.
 */
const template = (data) => {
  console.log(data);

  const TEXT_TEMPLATE = `
    a lead of type: ${data.text},
    Nombre: ${data.name},
    Compañia: ${data.company},
    Puesto: ${data.position},
    Celular: ${data.cellphone},
    Email: ${data.email},
    Origen: ${data.leadOrigin},
    was found by ${data.username}
  `;
  return { text: TEXT_TEMPLATE, };
};

module.exports = template;
