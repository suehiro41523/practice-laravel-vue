<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Resources\V1\TaskResource;
use App\Models\Task;
// use Illuminate\Console\View\Components\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return TaskResource::collection(Task::all());
    }
    public function show(Task $task)
    {
        return new TaskResource($task);
    }
    public function store(StoreTaskRequest $request)
    {
        Task::create($request->validated());
        return response()->json('task created');
    }
    public function update(StoreTaskRequest $request, Task $task)
    {
        $task->update($request->validated());
        return response()->json('task updated');
    }
    public function destroy(Task $task)
    {
        $task->delete();
        return response('task deleted');
    }
}
