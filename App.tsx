
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from 'react-native';

// Custom Hook: Stopwatch
function useStopwatch(isRunning: boolean) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    // Cleanup: stops the interval when paused or unmounted
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return seconds;
}

// Stopwatch Component
type StopwatchProps = {
  seconds: number;
  isRunning: boolean;
};

function Stopwatch({ seconds, isRunning }: StopwatchProps) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    `${String(minutes).padStart(2, '0')}:` +
    `${String(remainingSeconds).padStart(2, '0')}`;

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Lab Stopwatch</Text>
      <Text style={styles.timer}>{formattedTime}</Text>
      <Text style={styles.status}>
        {isRunning ? 'Running...' : 'Paused'}
      </Text>
    </View>
  );
}

// Practice Tracker Component
type PracticeTrackerProps = {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
};

function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: PracticeTrackerProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Practice Tracker</Text>

      <Text style={styles.counter}>Solved: {solved}</Text>

      {solved >= 5 && (
        <Text style={styles.success}>Great job!</Text>
      )}

      <Pressable style={styles.button} onPress={onSolve}>
        <Text style={styles.buttonText}>Solve +1</Text>
      </Pressable>

      <Pressable style={styles.resetButton} onPress={onReset}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
}

// Parent Component: LabScreen
function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>IT 313 Laboratory 5</Text>

      <Text style={styles.subtitle}>
        Lab Timer & Practice Tracker
      </Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch
        seconds={seconds}
        isRunning={isRunning}
      />

      <View style={styles.controls}>
        <Pressable
          style={styles.startButton}
          onPress={handleStart}
        >
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>

        <Pressable
          style={styles.stopButton}
          onPress={handleStop}
        >
          <Text style={styles.buttonText}>Stop</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>
        Keep practicing. Every problem counts!
      </Text>
    </ScrollView>
  );
}

export default function App() {
  return <LabScreen />;
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 14,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 8,
  },
  card: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    gap: 12,
    elevation: 2,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  counter: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  success: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#16A34A',
  },
  timer: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#2563EB',
    fontVariant: ['tabular-nums'],
  },
  status: {
    fontSize: 16,
    color: '#6B7280',
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#6B7280',
    padding: 14,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#16A34A',
    padding: 14,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  stopButton: {
    backgroundColor: '#DC2626',
    padding: 14,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },
  controls: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 350,
    gap: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 20,
  },
});
