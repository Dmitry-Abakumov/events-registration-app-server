import { Response, Request } from "express";

import { Event } from "../models/event";

export const getAllEvents = async (
  req: Request<{}, {}, {}, { page: number; limit: number }>,
  res: Response
) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  res.status(200).json(
    await Event.find({}, "-createdAt -updatedAt", {
      skip,
      limit,
    })
  );
};
