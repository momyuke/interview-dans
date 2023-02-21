const JobServices = new (require('../services/job.services'))();
const ResponeHandler = require('../utils/ResponeHandler');

class JobController {
  async listJob(req, res) {
    try {
      const { description, location, full_time, page } = req.query;

      const result = await JobServices.listJobs(
        description,
        location,
        full_time,
        page
      );

      res.status(result.status).send(result);
    } catch (err) {
      const resultError = new ResponeHandler(null, err.message, 500);
      res.status(resultError.status).send(resultError);
    }
  }

  async jobsDetail(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        const resultError = new ResponeHandler(
          null,
          'Id must not be null',
          401
        );
        res.status(resultError.status).send(resultError);
        return;
      }
      const result = await JobServices.detailsJob(id);

      res.status(result.status).send(result);
    } catch (err) {
      const resultError = new ResponeHandler(null, err.message, 500);
      res.status(resultError.status).send(resultError);
    }
  }
}

module.exports = JobController;
