import mongoose from 'mongoose';



export interface IProject {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new mongoose.Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    tags: {
      type: [String],
      required: true
    },
    category: {
      type: String,
      enum: ['Frontend', 'Backend', 'Fullstack', 'Design', 'Other'],
      required: true,
      default: 'Other'
    },
    liveUrl: {
      type: String
    },
    githubUrl: {
      type: String
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model<IProject>('Project', projectSchema);

export default Project;