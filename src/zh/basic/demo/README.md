---
title: laravel-demo
index: true
icon: discover
---

### Larvel使用 `basic`, `ctl` 包 `demo`

[basic-demo-laravel](https://github.com/rice-code/basic-demo-laravel)

### 完善 `Controller` 返回结构

```php
<?php

namespace App\Http\Controllers;

use Rice\Basic\Components\DTO\Response;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests;
    use DispatchesJobs;
    use ValidatesRequests;

    public function success($data = []): array
    {
        $resp = Response::buildSuccess($data);

        return $this->toArray($resp);
    }

    public function failure(string $errCode, string $errMessage): array
    {
        $resp = Response::buildFailure($errCode, $errMessage);

        return $this->toArray($resp);
    }

    public function toArray(Response $resp): array
    {
        return [
            'success'    => $resp->getSuccess(),
            'errCode'    => $resp->getErrCode(),
            'errMessage' => $resp->getErrMessage(),
            'data'       => $resp->getData(),
        ];
    }
}

```

### Exceptions 增加异常处理

```php
<?php

namespace App\Exceptions;

use Throwable;
use Illuminate\Http\Request;
use Rice\Basic\Components\DTO\Response;
use Illuminate\Validation\ValidationException;
use Rice\Basic\Components\Enum\ReturnCode\ClientErrorCode;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        // 运行异常处理
        $this->renderable(function (\RuntimeException $e, Request $request) {
            return response()->json(
                Response::buildFailure(
                    ClientErrorCode::USER_REQUEST_PARAMETER_ERROR,
                    $e->getMessage(),
                )->toArray()
            );
        });
        
        // 参数校验异常处理
        $this->renderable(function (ValidationException $e, Request $request) {
            return response()->json(
                Response::buildFailure(
                    ClientErrorCode::USER_REQUEST_PARAMETER_ERROR,
                    $e->validator->errors()->first(),
                    $e->validator->getMessageBag()->toArray()
                )->toArray()
            );
        });
    }
}

```

### 场景校验

```php
<?php

namespace App\Http\Requests;

use Rice\Basic\Support\Traits\Scene;
use Illuminate\Foundation\Http\FormRequest;
use Rice\Basic\Support\Traits\AutoFillProperties;

class UserRequest extends FormRequest
{
    use Scene;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'account'  => 'required|string|max:255',
            'password' => 'required|string|max:255',
        ];
    }

    public function scenes()
    {
        return [
            'save' => [
                'account',
                'password',
            ],
        ];
    }
}

```
