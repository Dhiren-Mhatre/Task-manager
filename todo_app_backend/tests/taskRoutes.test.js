const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('../routes/taskRoutes');

const app = express();
app.use(express.json());
app.use('/api', taskRoutes);

beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/todo_test_db', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});

describe('Task API', () => {
    let taskId;

    it('should create a new task', async () => {
        const response = await request(app)
            .post('/api/tasks')
            .send({ title: 'Test Task', description: 'Test Description' });

        expect(response.status).toBe(201);
        expect(response.body.title).toBe('Test Task');
        taskId = response.body._id;
    });

    it('should get all tasks', async () => {
        const response = await request(app).get('/api/tasks');
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
    });

    it('should update a task', async () => {
        const response = await request(app)
            .put(`/api/tasks/${taskId}`)
            .send({ title: 'Updated Task', completed: true });

        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Updated Task');
        expect(response.body.completed).toBe(true);
    });

    it('should delete a task', async () => {
        const response = await request(app).delete(`/api/tasks/${taskId}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Task deleted successfully');
    });
});
