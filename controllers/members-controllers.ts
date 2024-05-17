import { Member } from "../models/member";
import { Response, Request } from "express";

import { ctrlWrapper } from "../utils";
import { HttpError } from "../helpers";

import { MemberRequestType } from "../types/membersControllers";

const getEventMembers = async (req: Request, res: Response) => {
  const { id: eventId } = req.params;

  res.status(200).json(await Member.find({ eventId }, "-createdAt -updatedAt"));
};

const addMember = async (req: Request, res: Response) => {
  const { id: eventId } = req.params;

  const result = await Member.create({ ...req.body, eventId });

  res.status(201).json(result);
};

const ctrl = {
  getEventMembers: ctrlWrapper(getEventMembers),
  addMember: ctrlWrapper(addMember),
};

export default ctrl;
