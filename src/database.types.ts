export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export type Database = {
    public: {
        Tables: {
            Comments: {
                Row: {
                    content: string | null
                    created_at: string
                    id: number
                    parent_id: number | null
                    project_id: number | null
                    user_id: number | null
                }
                Insert: {
                    content?: string | null
                    created_at?: string
                    id?: number
                    parent_id?: number | null
                    project_id?: number | null
                    user_id?: number | null
                }
                Update: {
                    content?: string | null
                    created_at?: string
                    id?: number
                    parent_id?: number | null
                    project_id?: number | null
                    user_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "public_Comments_parent_id_fkey"
                        columns: ["parent_id"]
                        isOneToOne: false
                        referencedRelation: "Comments"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "public_Comments_project_id_fkey"
                        columns: ["project_id"]
                        isOneToOne: false
                        referencedRelation: "Projects"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "public_Comments_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "Users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            Configurations: {
                Row: {
                    created_at: string
                    id: number
                    key: string | null
                    value: Json | null
                }
                Insert: {
                    created_at?: string
                    id?: number
                    key?: string | null
                    value?: Json | null
                }
                Update: {
                    created_at?: string
                    id?: number
                    key?: string | null
                    value?: Json | null
                }
                Relationships: []
            }
            Datasets: {
                Row: {
                    caption_status: string | null
                    config: Json | null
                    created_at: string
                    deleted_at: string | null
                    id: number
                    images: Json | null
                    is_deleted: boolean | null
                    name: string | null
                    tags: string[] | null
                    trigger_words: string | null
                    upload_type: string | null
                    user_id: number | null
                    uuid: string | null
                }
                Insert: {
                    caption_status?: string | null
                    config?: Json | null
                    created_at?: string
                    deleted_at?: string | null
                    id?: number
                    images?: Json | null
                    is_deleted?: boolean | null
                    name?: string | null
                    tags?: string[] | null
                    trigger_words?: string | null
                    upload_type?: string | null
                    user_id?: number | null
                    uuid?: string | null
                }
                Update: {
                    caption_status?: string | null
                    config?: Json | null
                    created_at?: string
                    deleted_at?: string | null
                    id?: number
                    images?: Json | null
                    is_deleted?: boolean | null
                    name?: string | null
                    tags?: string[] | null
                    trigger_words?: string | null
                    upload_type?: string | null
                    user_id?: number | null
                    uuid?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "public_Datasets_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "Users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            Images: {
                Row: {
                    created_at: string
                    fts: unknown | null
                    gallery_id: number | null
                    id: number
                    image_url: string | null
                    is_shared: boolean | null
                    model_id: number | null
                    reuse_count: number | null
                    search_criteria: string | null
                    seed: number | null
                    task_id: string | null
                    user_id: number | null
                    view_count: number | null
                }
                Insert: {
                    created_at?: string
                    fts?: unknown | null
                    gallery_id?: number | null
                    id?: number
                    image_url?: string | null
                    is_shared?: boolean | null
                    model_id?: number | null
                    reuse_count?: number | null
                    search_criteria?: string | null
                    seed?: number | null
                    task_id?: string | null
                    user_id?: number | null
                    view_count?: number | null
                }
                Update: {
                    created_at?: string
                    fts?: unknown | null
                    gallery_id?: number | null
                    id?: number
                    image_url?: string | null
                    is_shared?: boolean | null
                    model_id?: number | null
                    reuse_count?: number | null
                    search_criteria?: string | null
                    seed?: number | null
                    task_id?: string | null
                    user_id?: number | null
                    view_count?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "Images_gallery_id_fkey"
                        columns: ["gallery_id"]
                        isOneToOne: false
                        referencedRelation: "UserGalleries"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "Images_model_id_fkey"
                        columns: ["model_id"]
                        isOneToOne: false
                        referencedRelation: "Models"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "Images_task_id_fkey"
                        columns: ["task_id"]
                        isOneToOne: false
                        referencedRelation: "Tasks"
                        referencedColumns: ["task_id"]
                    },
                    {
                        foreignKeyName: "Images_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "Users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            ImageViewRanks: {
                Row: {
                    created_at: string
                    fts: unknown | null
                    image_id: number
                    month: number | null
                    year: number | null
                    month_count: number | null
                }
                Insert: {
                    created_at?: string
                    fts?: unknown | null
                    image_id?: number
                    month?: number | null
                    year?: number | null
                    month_count?: number | null
                }
                Update: {
                    created_at?: string
                    fts?: unknown | null
                    image_id?: number
                    month?: number | null
                    year?: number | null
                    month_count?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "public_ImageViewRanks_image_id_fkey"
                        columns: ["image_id"]
                        isOneToOne: true
                        referencedRelation: "Images"
                        referencedColumns: ["id"]
                    }
                ]
            }
            ProjectViewRanks: {
                Row: {

                    created_at: string
                    fts: unknown | null
                    project_id: number
                    month: number | null
                    year: number | null
                    month_count: number | null
                }
                Insert: {

                    created_at?: string
                    fts?: unknown | null
                    project_id?: number
                    month?: number | null
                    year?: number | null
                    month_count?: number | null
                }
                Update: {

                    created_at?: string
                    fts?: unknown | null
                    project_id?: number
                    month?: number | null
                    year?: number | null
                    month_count?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "public_projectviewranks_project_id_fkey"
                        columns: ["project_id"]
                        isOneToOne: true
                        referencedRelation: "Projects"
                        referencedColumns: ["id"]
                    }
                ]
            }
            Models: {
                Row: {
                    created_at: string
                    description: string | null
                    id: number
                    images: string[] | null
                    model_file_name: string | null
                    name: string | null
                    tags: string[] | null
                    trigger_worlds: string[] | null
                    type: string | null
                }
                Insert: {
                    created_at?: string
                    description?: string | null
                    id?: number
                    images?: string[] | null
                    model_file_name?: string | null
                    name?: string | null
                    tags?: string[] | null
                    trigger_worlds?: string[] | null
                    type?: string | null
                }
                Update: {
                    created_at?: string
                    description?: string | null
                    id?: number
                    images?: string[] | null
                    model_file_name?: string | null
                    name?: string | null
                    tags?: string[] | null
                    trigger_worlds?: string[] | null
                    type?: string | null
                }
                Relationships: []
            }
            Nodes: {
                Row: {
                    address: string | null
                    created_at: string
                    engines: Json | null
                    id: number
                    machine_id: string | null
                    status: string | null
                    type: string | null
                }
                Insert: {
                    address?: string | null
                    created_at?: string
                    engines?: Json | null
                    id?: number
                    machine_id?: string | null
                    status?: string | null
                    type?: string | null
                }
                Update: {
                    address?: string | null
                    created_at?: string
                    engines?: Json | null
                    id?: number
                    machine_id?: string | null
                    status?: string | null
                    type?: string | null
                }
                Relationships: []
            }
            Notifications: {
                Row: {
                    content: string | null
                    created_at: string
                    id: number
                    is_old: boolean | null
                    is_read: boolean | null
                    thumbnail: string | null
                    title: string | null
                    url: string | null
                    user_id: number | null
                }
                Insert: {
                    content?: string | null
                    created_at?: string
                    id?: number
                    is_old?: boolean | null
                    is_read?: boolean | null
                    thumbnail?: string | null
                    title?: string | null
                    url?: string | null
                    user_id?: number | null
                }
                Update: {
                    content?: string | null
                    created_at?: string
                    id?: number
                    is_old?: boolean | null
                    is_read?: boolean | null
                    thumbnail?: string | null
                    title?: string | null
                    url?: string | null
                    user_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "public_Notifications_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "Users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            Order: {
                Row: {
                    amount: number | null
                    created_at: string
                    credits_exchange: number | null
                    discount: number | null
                    id: number
                    is_paid: boolean | null
                    order_code: string | null
                    plan_id: number | null
                    referral_code: string | null
                    user_id: number | null
                }
                Insert: {
                    amount?: number | null
                    created_at?: string
                    credits_exchange?: number | null
                    discount?: number | null
                    id?: number
                    is_paid?: boolean | null
                    order_code?: string | null
                    plan_id?: number | null
                    referral_code?: string | null
                    user_id?: number | null
                }
                Update: {
                    amount?: number | null
                    created_at?: string
                    credits_exchange?: number | null
                    discount?: number | null
                    id?: number
                    is_paid?: boolean | null
                    order_code?: string | null
                    plan_id?: number | null
                    referral_code?: string | null
                    user_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "Order_plan_id_fkey"
                        columns: ["plan_id"]
                        isOneToOne: false
                        referencedRelation: "Plans"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "Order_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "Users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            Partners: {
                Row: {
                    code: string | null
                    created_at: string
                    id: number
                    first_time_buy_voucher: number | null
                    name: string | null
                    password: string | null
                    level: string | null
                }
                Insert: {
                    code?: string | null
                    created_at?: string
                    id?: number
                    first_time_buy_voucher?: number | null
                    name?: string | null
                    password?: string | null
                    level?: string | null
                }
                Update: {
                    code?: string | null
                    created_at?: string
                    id?: number
                    first_time_buy_voucher?: number | null
                    name?: string | null
                    password?: string | null
                    level?: string | null
                }
                Relationships: []
            },
            PartnersOrders: {
                Row: {
                    partner_id: number,
                    order_id: number,
                    commission: number | null,
                    type: string | null,
                    commission_rate: number | null
                }
                Insert: {
                    partner_id?: number,
                    order_id?: number,
                    commission?: number | null,
                    commission_rate?: number | null,
                    type?: string | null
                }
                Update: {
                    partner_id?: number,
                    order_id?: number,
                    commission?: number | null,
                    commission_rate?: number | null,
                    type?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "PartnersOrders_partner_id_fkey"
                        columns: ["partner_id"]
                        isOneToOne: false
                        referencedRelation: "Partners"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "PartnersOrders_order_id_fkey"
                        columns: ["order_id"]
                        isOneToOne: false
                        referencedRelation: "Order"
                        referencedColumns: ["id"]
                    }
                ]
            },
            Plans: {
                Row: {
                    amount: number | null
                    bonus_credits: number
                    created_at: string
                    description: string | null
                    discount: number | null
                    id: number
                    month_number: number | null
                    name: string | null
                }
                Insert: {
                    amount?: number | null
                    bonus_credits?: number
                    created_at?: string
                    description?: string | null
                    discount?: number | null
                    id?: number
                    month_number?: number | null
                    name?: string | null
                }
                Update: {
                    amount?: number | null
                    bonus_credits?: number
                    created_at?: string
                    description?: string | null
                    discount?: number | null
                    id?: number
                    month_number?: number | null
                    name?: string | null
                }
                Relationships: []
            }
            Portfolios: {
                Row: {
                    avatar: string | null
                    career: string | null
                    created_at: string
                    email: string | null
                    facebook_link: string | null
                    full_name: string | null
                    id: number
                    introduction: string | null
                    main_color: string | null
                    phone: string | null
                    template_option: number | null
                    user_id: number | null
                    work_experience: Json | null
                }
                Insert: {
                    avatar?: string | null
                    career?: string | null
                    created_at?: string
                    email?: string | null
                    facebook_link?: string | null
                    full_name?: string | null
                    id?: number
                    introduction?: string | null
                    main_color?: string | null
                    phone?: string | null
                    template_option?: number | null
                    user_id?: number | null
                    work_experience?: Json | null
                }
                Update: {
                    avatar?: string | null
                    career?: string | null
                    created_at?: string
                    email?: string | null
                    facebook_link?: string | null
                    full_name?: string | null
                    id?: number
                    introduction?: string | null
                    main_color?: string | null
                    phone?: string | null
                    template_option?: number | null
                    user_id?: number | null
                    work_experience?: Json | null
                }
                Relationships: [
                    {
                        foreignKeyName: "Portfolios_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "Users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            ProjectBuyedHistories: {
                Row: {
                    created_at: string
                    credit_charge: number | null
                    id: number
                    project_id: number
                    user_id: number
                }
                Insert: {
                    created_at?: string
                    credit_charge?: number | null
                    id?: number
                    project_id: number
                    user_id: number
                }
                Update: {
                    created_at?: string
                    credit_charge?: number | null
                    id?: number
                    project_id?: number
                    user_id?: number
                }
                Relationships: [
                    {
                        foreignKeyName: "public_ProjectBuyedHistories_project_id_fkey"
                        columns: ["project_id"]
                        isOneToOne: false
                        referencedRelation: "Projects"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "public_ProjectReuseHistory_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "Users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            Projects: {
                Row: {
                    created_at: string
                    fts: unknown | null
                    id: number
                    image_id: number | null
                    information: Json | null
                    introduction: string | null
                    is_parameter_share: boolean | null
                    like_count: number | null
                    main_color: string | null
                    name: string | null
                    parameter_share_charge: number | null
                    portfolio_id: number | null
                    reuse_count: number | null
                    search_criteria: string | null
                    user_id: number | null
                    view_count: number | null
                }
                Insert: {
                    created_at?: string
                    fts?: unknown | null
                    id?: number
                    image_id?: number | null
                    information?: Json | null
                    introduction?: string | null
                    is_parameter_share?: boolean | null
                    like_count?: number | null
                    main_color?: string | null
                    name?: string | null
                    parameter_share_charge?: number | null
                    portfolio_id?: number | null
                    reuse_count?: number | null
                    search_criteria?: string | null
                    user_id?: number | null
                    view_count?: number | null
                }
                Update: {
                    created_at?: string
                    fts?: unknown | null
                    id?: number
                    image_id?: number | null
                    information?: Json | null
                    introduction?: string | null
                    is_parameter_share?: boolean | null
                    like_count?: number | null
                    main_color?: string | null
                    name?: string | null
                    parameter_share_charge?: number | null
                    portfolio_id?: number | null
                    reuse_count?: number | null
                    search_criteria?: string | null
                    user_id?: number | null
                    view_count?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "Projects_portfolio_id_fkey"
                        columns: ["portfolio_id"]
                        isOneToOne: false
                        referencedRelation: "Portfolios"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "Projects_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "Users"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "public_Projects_image_id_fkey"
                        columns: ["image_id"]
                        isOneToOne: false
                        referencedRelation: "Images"
                        referencedColumns: ["id"]
                    }
                ]
            }
            ProjectSectionImages: {
                Row: {
                    created_at: string
                    id: number
                    image_id: number | null
                    project_section_id: number | null
                }
                Insert: {
                    created_at?: string
                    id?: number
                    image_id?: number | null
                    project_section_id?: number | null
                }
                Update: {
                    created_at?: string
                    id?: number
                    image_id?: number | null
                    project_section_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "ProjectSectionImages_image_id_fkey"
                        columns: ["image_id"]
                        isOneToOne: false
                        referencedRelation: "Images"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "ProjectSectionImages_project_section_id_fkey"
                        columns: ["project_section_id"]
                        isOneToOne: false
                        referencedRelation: "ProjectSections"
                        referencedColumns: ["id"]
                    }
                ]
            }
            ProjectSections: {
                Row: {
                    created_at: string
                    description: string | null
                    id: number
                    name: string | null
                    priority: number | null
                    project_id: number | null
                }
                Insert: {
                    created_at?: string
                    description?: string | null
                    id?: number
                    name?: string | null
                    priority?: number | null
                    project_id?: number | null
                }
                Update: {
                    created_at?: string
                    description?: string | null
                    id?: number
                    name?: string | null
                    priority?: number | null
                    project_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "ProjectSections_project_id_fkey"
                        columns: ["project_id"]
                        isOneToOne: false
                        referencedRelation: "Projects"
                        referencedColumns: ["id"]
                    }
                ]
            }
            Tasks: {
                Row: {
                    created_at: string
                    credits_cost: number | null
                    engine: string | null
                    finished_at: string | null
                    id: number
                    node: string | null
                    param: Json | null
                    status: string | null
                    task_id: string
                    type: string | null
                    user_id: number | null
                }
                Insert: {
                    created_at?: string
                    credits_cost?: number | null
                    engine?: string | null
                    finished_at?: string | null
                    id?: number
                    node?: string | null
                    param?: Json | null
                    status?: string | null
                    task_id: string
                    type?: string | null
                    user_id?: number | null
                }
                Update: {
                    created_at?: string
                    credits_cost?: number | null
                    engine?: string | null
                    finished_at?: string | null
                    id?: number
                    node?: string | null
                    param?: Json | null
                    status?: string | null
                    task_id?: string
                    type?: string | null
                    user_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "Tasks_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "Users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            test_table: {
                Row: {
                    id: number
                    inserted_at: string
                    name: string | null
                    updated_at: string
                }
                Insert: {
                    id?: number
                    inserted_at?: string
                    name?: string | null
                    updated_at?: string
                }
                Update: {
                    id?: number
                    inserted_at?: string
                    name?: string | null
                    updated_at?: string
                }
                Relationships: []
            }
            Tokens: {
                Row: {
                    created_at: string
                    id: number
                    jwt: string | null
                    user_id: number | null
                }
                Insert: {
                    created_at?: string
                    id?: number
                    jwt?: string | null
                    user_id?: number | null
                }
                Update: {
                    created_at?: string
                    id?: number
                    jwt?: string | null
                    user_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "Tokens_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "Users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            Topics: {
                Row: {
                    created_at: string
                    project_id: number
                    user_id: number
                }
                Insert: {
                    created_at?: string
                    project_id: number
                    user_id?: number
                }
                Update: {
                    created_at?: string
                    project_id?: number
                    user_id?: number
                }
                Relationships: [
                    {
                        foreignKeyName: "public_Topics_project_id_fkey"
                        columns: ["project_id"]
                        isOneToOne: false
                        referencedRelation: "Projects"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "public_Topics_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "Users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            Trainings: {
                Row: {
                    config: Json | null
                    cost: number | null
                    created_at: string
                    dataset_id: number | null
                    expired_date: string | null
                    finished_at: string | null
                    id: number
                    model_url: string | null
                    preview_prompts: string | null
                    status: string | null
                    trained_epochs: Json | null
                    training_process_metadata: Json | null
                    user_id: number | null
                }
                Insert: {
                    config?: Json | null
                    cost?: number | null
                    created_at?: string
                    dataset_id?: number | null
                    expired_date?: string | null
                    finished_at?: string | null
                    id?: number
                    model_url?: string | null
                    preview_prompts?: string | null
                    status?: string | null
                    trained_epochs?: Json | null
                    training_process_metadata?: Json | null
                    user_id?: number | null
                }
                Update: {
                    config?: Json | null
                    cost?: number | null
                    created_at?: string
                    dataset_id?: number | null
                    expired_date?: string | null
                    finished_at?: string | null
                    id?: number
                    model_url?: string | null
                    preview_prompts?: string | null
                    status?: string | null
                    trained_epochs?: Json | null
                    training_process_metadata?: Json | null
                    user_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "public_Trainings_dataset_id_fkey"
                        columns: ["dataset_id"]
                        isOneToOne: false
                        referencedRelation: "Datasets"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "public_Trainings_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "Users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            UserGalleries: {
                Row: {
                    created_at: string
                    id: number
                    name: string | null
                    user_id: number | null
                }
                Insert: {
                    created_at?: string
                    id?: number
                    name?: string | null
                    user_id?: number | null
                }
                Update: {
                    created_at?: string
                    id?: number
                    name?: string | null
                    user_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "UserGalleries_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "Users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            UserProjectLikes: {
                Row: {
                    created_at: string
                    id: number
                    project_id: number
                    user_id: number
                }
                Insert: {
                    created_at?: string
                    id?: number
                    project_id: number
                    user_id: number
                }
                Update: {
                    created_at?: string
                    id?: number
                    project_id?: number
                    user_id?: number
                }
                Relationships: [
                    {
                        foreignKeyName: "public_UserProjectLike_project_id_fkey"
                        columns: ["project_id"]
                        isOneToOne: false
                        referencedRelation: "Projects"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "public_UserProjectLike_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: false
                        referencedRelation: "Users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            Users: {
                Row: {
                    avatar: string | null
                    created_at: string
                    credits: number | null
                    email: string | null
                    expired_at: string | null
                    full_name: string | null
                    google_id: string | null
                    has_read_require_notification: boolean | null
                    id: number
                    is_vip: boolean
                    phone_number: string | null
                }
                Insert: {
                    avatar?: string | null
                    created_at?: string
                    credits?: number | null
                    email?: string | null
                    expired_at?: string | null
                    full_name?: string | null
                    google_id?: string | null
                    has_read_require_notification?: boolean | null
                    id?: number
                    is_vip?: boolean
                    phone_number?: string | null
                }
                Update: {
                    avatar?: string | null
                    created_at?: string
                    credits?: number | null
                    email?: string | null
                    expired_at?: string | null
                    full_name?: string | null
                    google_id?: string | null
                    has_read_require_notification?: boolean | null
                    id?: number
                    is_vip?: boolean
                    phone_number?: string | null
                }
                Relationships: []
            }
            UserSavedLoras: {
                Row: {
                    created_at: string
                    loras: Json | null
                    user_id: number
                }
                Insert: {
                    created_at?: string
                    loras?: Json | null
                    user_id?: number
                }
                Update: {
                    created_at?: string
                    loras?: Json | null
                    user_id?: number
                }
                Relationships: [
                    {
                        foreignKeyName: "UserSavedLoras_user_id_fkey"
                        columns: ["user_id"]
                        isOneToOne: true
                        referencedRelation: "Users"
                        referencedColumns: ["id"]
                    }
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            image_reuse_increase: {
                Args: {
                    image_id: number
                }
                Returns: undefined
            }
            image_view_increase: {
                Args: {
                    image_id: number
                }
                Returns: undefined
            }
            project_like_increase: {
                Args: {
                    project_id: number
                }
                Returns: undefined
            }
            project_like_update: {
                Args: {
                    project_id: number
                    type: string
                }
                Returns: undefined
            }
            project_reuse_increase: {
                Args: {
                    project_id: number
                }
                Returns: undefined
            }
            project_view_increase: {
                Args: {
                    project_id: number
                }
                Returns: undefined
            }
            total_amount_last_quarter: {
                Args: {
                    code: string
                }
                Returns: number
            }
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}

export type Tables<
    PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
            Row: infer R
        }
    ? R
    : never
    : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
            Row: infer R
        }
    ? R
    : never
    : never

export type TablesInsert<
    PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Insert: infer I
    }
    ? I
    : never
    : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
    }
    ? I
    : never
    : never

export type TablesUpdate<
    PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
        Update: infer U
    }
    ? U
    : never
    : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
    }
    ? U
    : never
    : never

export type Enums<
    PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never
