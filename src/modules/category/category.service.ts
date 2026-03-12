import { prisma } from "../../config/prisma"


const createCategoryService = async (payload: { name: string }) => {
    const result = await prisma.category.create({
        data: payload
    })
    return result
}

const getAllCategoriesService = async () => {
    const result = await prisma.category.findMany()
    return result
}


const updateCategoryService = async (id: string, payload: { name: string }) => {
    const result = await prisma.category.update({
        where: { id },
        data: payload
    })
    return result
}



export const categoryService = {
    createCategoryService,
    getAllCategoriesService,
    updateCategoryService,
}