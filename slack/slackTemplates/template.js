/**
 * Takes a JSON object representing a ticket and turns it into well
 * formatted Slack message
 * @param {object} data - JSON representation of the ticket - The title of the book.
 */
const template = (data) => {
  console.log(data);
  return { text: data.text,
    username: data.username, };
};

module.exports = template;
