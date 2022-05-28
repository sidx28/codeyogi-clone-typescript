type submission = { submission_link: string };
export type Assignment = {
  assignment_id: number;
  created_at: string;
  discription: string;
  due_date: string;
  title: string;
  uploaded_at: string;
  submissions: [submission] | any;
  id: number;
};
