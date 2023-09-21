import { ApplicationInterface } from 'interfaces/application';
import { HiringInterface } from 'interfaces/hiring';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FreelancerProfileInterface {
  id?: string;
  freelancer_id: string;
  skills: string;
  experience: number;
  portfolio_link?: string;
  created_at?: any;
  updated_at?: any;
  name: string;
  application?: ApplicationInterface[];
  hiring?: HiringInterface[];
  user?: UserInterface;
  _count?: {
    application?: number;
    hiring?: number;
  };
}

export interface FreelancerProfileGetQueryInterface extends GetQueryInterface {
  id?: string;
  freelancer_id?: string;
  skills?: string;
  portfolio_link?: string;
  name?: string;
}
