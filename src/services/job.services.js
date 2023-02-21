const ResponeHandler = require('../utils/ResponeHandler');
const axios = require('axios');

class JobServices {
  async listJobs(description = '', location = '', fullTime = false, page = 1) {
    try {
      const result =
        await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description
        =${description}&location=${location}&full_time=${fullTime}&`);

      return new ResponeHandler(result.data, null, 200);
    } catch (err) {
      return new ResponeHandler(null, err.message, 500);
    }
  }

  async detailsJob(id) {
    try {
      const result = await axios.get(
        `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`
      );
      return new ResponeHandler(result.data, null, 200);
    } catch (err) {
      return new ResponeHandler(null, err.message, 500);
    }
  }
}

module.exports = JobServices;
