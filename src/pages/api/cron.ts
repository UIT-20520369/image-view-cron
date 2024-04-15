import type { NextApiRequest, NextApiResponse } from 'next';
import { redis } from '@/utils/redis';
import supabase from '@/utils/supabase';
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        let imgViewRecordsList = await redis.zrevrange("imagesView", 0, -1);
        let projViewRecordsList = await redis.zrevrange("projectsView", 0, -1);
        if (!!imgViewRecordsList) {
            let sortedList = [];
            const imageIdSet = new Set<number>();
            let parsedList = imgViewRecordsList.map(record => {
                return JSON.parse(record as string)
            })
            parsedList.sort((a: any, b: any) => b.month_count - a.month_count);
            // console.log({ parsedList });
            for (const item of parsedList) {
                if (!imageIdSet.has(item.image_id)) {
                    sortedList.push(item);
                    imageIdSet.add(item.image_id);
                }
            }
            // console.log({sortedList});
            const top5 = sortedList.splice(0, 5);

            const updateTop5Promise = top5.map(async record => {
                const now = new Date();
                const input = {
                    image_id: record.image_id,
                    month_count: record.month_count,
                    month: now.getMonth() + 1,
                    year: now.getFullYear()
                }
                console.log({ input });
                try {
                    const saveImageMostViewRes = await supabase.from("ImageViewRanks").insert({ ...input }).select();
                    if (!!saveImageMostViewRes.data) {
                        await redis.zremrangebyrank('imagesView', 0, -1)
                    }
                    console.log({ saveImageMostViewRes });
                }
                catch {

                }
            })
            await Promise.all(updateTop5Promise);
        }
        if (!!projViewRecordsList) {
            let sortedList = [];
            const projectIdSet = new Set<number>();
            let parsedList = projViewRecordsList.map(record => {
                return JSON.parse(record as string)
            })
            parsedList.sort((a: any, b: any) => b.month_count - a.month_count);
            for (const item of parsedList) {
                if (!projectIdSet.has(item.image_id)) {
                    sortedList.push(item);
                    projectIdSet.add(item.image_id);
                }
            }
            const top5 = sortedList.splice(0, 5);
            // console.log({ parsedList });
           const updateTop5= top5.map(async record => {
                const now = new Date();
                const input = {
                    project_id: record.project_id,
                    month_count: record.month_count,
                    month: now.getMonth() + 1,
                    year: now.getFullYear()
                }
                try {
                    const saveProjectMostViewRes = await supabase.from("ProjectViewRanks").insert({ ...input }).select();
                    if (!!saveProjectMostViewRes.data) {
                        await redis.zremrangebyrank('projectsView', 0, -1);
                    }
                }
                catch {

                }
            })
            await Promise.all(updateTop5);
        }
        res.status(200).json({ imgViewRecordsList, projViewRecordsList });
    } catch (e: any) {

    }
}