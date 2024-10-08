import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const response = await axios.get('https://storage.googleapis.com/panels-api/data/20240916/media-1a-i-p~s');
        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching data', error: error.message }, { status: 500 });
    }
}
