import type { NextApiRequest, NextApiResponse } from 'next';
import { redis } from '@/utils/redis';
import supabase from '@/utils/supabase';
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const imgViewRecordsList = await redis.zrevrange("imagesView", 0, -1);
        const projViewRecordsList = await redis.zrevrange("projectsView", 0, -1);
        if (!!imgViewRecordsList) {
            const formatedRecords = imgViewRecordsList.map(record => {
                return JSON.parse(record as string)
            })
            formatedRecords.forEach(async record => {
                const now = new Date();
                const input = {
                    image_id: record.image_id,
                    month_count: record.month_count,
                    month: now.getMonth() + 1,
                    year: now.getFullYear()
                }
                try {
                    const saveImageMostViewRes = await supabase.from("ImageViewRanks").insert({ ...input });
                    console.log({ saveImageMostViewRes });
                }
                catch {

                }
            })
        }
        if (!!projViewRecordsList) {
            const formatedRecords = projViewRecordsList.map(record => {
                return JSON.parse(record as string)
            })
            formatedRecords.forEach(async record => {
                const now = new Date();
                const input = {
                    project_id: record.project_id,
                    month_count: record.month_count,
                    month: now.getMonth() + 1,
                    year: now.getFullYear()
                }
                try {
                    const saveProjectMostViewRes = await supabase.from("ProjectViewRanks").insert({ ...input });
                    console.log({ saveProjectMostViewRes });
                }
                catch {

                }
            })
        }
        res.status(200).json({ imgViewRecordsList, projViewRecordsList });
    } catch (e: any) {

    }
}