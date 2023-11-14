<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            // nameのデータは必須、最短3文字、最長30文字
            'name' => ['required', 'min:3', 'max:30'],
            // contentのデータは空でも良い
            'content' => ['nullable', 'string']
        ];
    }
}
