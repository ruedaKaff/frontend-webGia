
export interface CommunityData {
    id_community: number;
    user_id: number;
    input: string;
    output: string;
    outimage: Buffer | null;
    model_type: string;
    username: string;
    updated_at: Date;
    email: string;
  }