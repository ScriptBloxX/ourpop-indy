
export async function GET(req: any) {
    return Response.json({
        message: 'No such data'
    }, {
        status: 404
    })
}
