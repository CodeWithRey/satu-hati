<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'full_name' => ['required', 'string', 'max:255'],
            'birthday' => ['nullable', 'date', 'before:12 years ago'],
            'summary' => ['nullable', 'string'],
            'gender_id' => ['required'],
            'profile_picture' => ['nullable', 'image'],
        ];
    }

    public function messages(): array
    {
        return [
            'full_name.required' => ':Attribute wajib diisi.',
            'birthday.before' => 'Umur minimal harus 12 tahun.',
            'profile_picture.image' => ':Attribute harus berupa gambar (png, jpeg, svg dan sejenisnya).'
        ];
    }
}
