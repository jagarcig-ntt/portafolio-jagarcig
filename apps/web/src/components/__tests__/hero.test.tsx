import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Hero } from '../hero';

vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('Hero', () => {
  it('renders profile summary', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { name: /jaime garcia garcia/i })).toBeInTheDocument();
    expect(screen.getByText(/Senior Software Lead/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contactar/i })).toBeInTheDocument();
  });
});
